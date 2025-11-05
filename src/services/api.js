// Mock API functions. Replace with real endpoints when ready.
export async function createBooking(form){
// Basic client-side validation
if(!form.name || !form.email || !form.date) throw new Error('missing');


// Simulate server delay and return a pseudo booking id
await new Promise(r=>setTimeout(r, 600));
return {id: Math.random().toString(36).slice(2,9), ...form};
}