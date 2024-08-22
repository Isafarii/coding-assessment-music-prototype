import React, {Component} from "react";
import {render} from "react-dom";

//styles

const style ={
    container: {
        fontFamily: "'Arial', sans-serif",
        textAlign: "center",
        color: "#324",
    },
    header: {
        backgroundColor: "#4CEAB31",
        padding: "15px",
        color: "brown",
    },
    mainContent: {
        padding: "20px",
    },
    footer: {
        marginTop: "15px",
        padding: "10px",
        backgroundColor: "#f2f2f0",
    },
    button: {
        margin: "15px",
        padding: "15px 20px",
        backgroundColor: "#3EBJ40",
        color: "gray",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    input:{
        padding: "10px",
        margin: "15px",
        borderRadius: "4px",
        border: "1px solid #ddd",
    },
};

//make sure to do npm run dev to see changes in
//main.js that shows!
export default class App extends Component{
    constructor(props){
        super(props);
        this.state= {
            room_code: "",
            room_codes: [], //currently empty?
        };
    }

    componentDidMount(){
        fetch('/api/rooms')
            //get from rooms?
            .then(response => response.json())
            .then(data => {
                const room_codes = data.map(room => room.code)
                this.setState({ room_codes });
            })
            .catch(error => console.error("Error fetching: ", error));

    }

    validateRoomCode = async () => {
        const response= await fetch("/api/validateroom/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({room_code: this.state.room_code}),
        });
    
        if (response.status === 404) {
            return false;
        }
        const data= await response.json();
        return data.valid;
    };
    

    
    navigateTo = async (path) => {
        if (path.includes("/join")){
            if (this.state.room_code ===""){
            alert("Please enter a code before using the button.");
            return;
        } 

        const valid = await this.validateRoomCode();
        if (!valid){
            alert("Room code invalid");
            return;
        }
        }
        window.location.href = path;
    };

    render(){
        return(
        <div style= {style.container}>
        <header style= {style.header}><h1>Music Project/Coding Assessment Page</h1></header>
        <main style= {style.mainContent}><p>Please use these buttons to navigate the website:</p>

        <button style= {style.button} onClick= {() => this.navigateTo("/")}>Home</button>
        <button style= {style.button} onClick= {() => this.navigateTo("/api/room")}>API Endpoint 1</button> 
        <button style= {style.button} onClick= {() => this.navigateTo("/api/rooms")}>API Endpoint 2</button>   
        <input 
        type="text"
        placeholder="Enter Room Code"
        style={style.input}
        value={this.state.room_code}
        onChange={(event) => this.setState({room_code: event.target.value})}
        />

        <button style= {style.button} onClick= {() => this.navigateTo(`/api/room/${this.state.room_code}/join`)}>API Endpoint 3</button>   
        <p style={{ marginTop: "15px", color: "#456" }}> 
            The Join Room buttom uses GET; to use a POST request, please use curl if necessary on your terminal.
            </p>
        </main><footer style = {style.footer}><p>&copy; Music Project/Code Assessment</p></footer>
        </div>
        );}

}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);