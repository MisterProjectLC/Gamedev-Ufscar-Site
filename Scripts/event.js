
class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (!this.props.imageLink || !this.props.title || !this.props.text)
            return <div/>;
        return (
            <div class="event">
                <img src={getImage(this.props.imageLink)}/>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}
                </p>
            </div>
        );
    }

    getImage(name) {
        return "Images/Icons/" + name + ".png";
    }
}