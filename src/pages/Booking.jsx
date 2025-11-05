import React, {useState} from 'react';
import { createBooking } from '../services/api';


export default function Booking(){
const [form, setForm] = useState({name:'', email:'', date:'', service:'tune'});
const [status, setStatus] = useState(null);


async function submit(e){
e.preventDefault();
setStatus('loading');
try{
const res = await createBooking(form);
setStatus('success');
}catch(err){
setStatus('error');
}
}


return (
<div className="page booking">
<h2>Book a service</h2>
<form onSubmit={submit} className="booking-form">
<label>Name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></label>
<label>Email<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/></label>
<label>Date<input type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required/></label>
<label>Service
<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
<option value="tune">Basic Tune</option>
<option value="overhaul">Full Overhaul</option>
<option value="custom">Custom Build Consultation</option>
</select>
</label>


<div className="form-actions">
<button type="submit">Request booking</button>
</div>


<div className="status">{status === 'loading' && 'Sending...'}{status === 'success' && 'Booked — we emailed you.'}{status === 'error' && 'Failed. Try again.'}</div>
</form>


<aside className="booking-notes">
<h4>How bookings work</h4>
<p>We confirm availability within 24 hours. For custom builds we require an initial deposit.</p>
</aside>
</div>
);
}