import profilePic from './assets/ProfilePic.jpg'

function Student(){
    return (
        <div className="card">
        <img className="card-image" src={profilePic} alt= "pRofile Pic"></img>
            <h2>Patrick Rontale</h2>
            <p>johnpatrickpacana12@gmail.com</p>
        </div>
    );
}

export default Student