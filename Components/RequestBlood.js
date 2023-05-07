import "./Requestblood.css";

export default function RequestBlood() {
  return(
<main className="requestblood">
  <div className="requestblood1">
<h1>Blood Request Form</h1>
    <form action="/submit" method="post">
      <input type="text" id="name" name="name" placeholder="Full Name" required/>
      
      <select id="bloodtype" name="bloodtype" required>
        <option value="">Select Blood Type</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    
      <input type="tel" id="contact" name="contact"  placeholder="Contact Number" required/>

      <input type="email" id="email" name="email" placeholder="Email" required/>

      <input type="text" id="location" name="location" placeholder="Location" required/>

      <input type="number" id="quantity" name="quantity" placeholder="Quantity" required/>


      <textarea id="message" placeholder="Message" name="message"></textarea>

      <button type="submit">Submit</button>
      </form>
    </div>
</main>
        )
  }