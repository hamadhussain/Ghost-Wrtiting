import Home from './Home/page';
// import Home from './About/page';
// import Home from './portfolio/page';
// import Home from './contact/page';
// import Home from './Components/memoir-autobiography-ghostwriting/page';
export default function Homee() {
  return (
    <>
    <Home/>
    </>
  );
}


// 'use client'
// import React, { useState } from 'react'

// export default function ContactForm() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const [countryCode, setCountryCode] = useState('+92')
//   const [status, setStatus] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus('Sending...')
// const cleanedNumber = phoneNumber.startsWith('0')
//   ? phoneNumber.slice(1)
//   : phoneNumber;

// const fullNumber = `${countryCode}${cleanedNumber}`; 

//     try {
//       const response = await fetch('/api', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name,
//           email,
//           number: fullNumber,
//           message,
//         }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setStatus('✅ Email sent successfully!')
//         setName('')
//         setEmail('')
//         setPhoneNumber('')
//         setMessage('')
//         setCountryCode('+92')
//       } else {
//         setStatus(`❌ Error: ${data.error || 'Failed to send message'}`)
//       }
//     } catch (error) {
//       setStatus(`❌ Error: ${error.message}`)
//     }
//   }

//   return (
//     <form className="cmxform" id="bannerform" 
//     onSubmit={handleSubmit}>
//       <div className="row">
//         {/* Name */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <input
//               type="text"
//               placeholder="Your Name"
//               minLength={2}
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <input
//               type="email"
//               placeholder="Your Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Country Code + Phone */}
//         <div className="col-lg-12">
//           <div className="fldset" style={{ display: 'flex', gap: '10px' }}>
//             <select
//               value={countryCode}
//               onChange={(e) => setCountryCode(e.target.value)}
//               required
//               style={{ width: '120px' }}
//             >
//               <option value="+92">Pakistan (+92)</option>
//               <option value="+1">United States (+1)</option>
//               <option value="+44">United Kingdom (+44)</option>
//               <option value="+91">India (+91)</option>
//             </select>
//             <input
//               type="tel"
//               placeholder="Contact Number"
//               required
//               minLength={7}
//               maxLength={15}
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               style={{ flex: 1 }}
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <textarea
//               placeholder="Talk About Your Project"
//               rows={7}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </div>
//         </div>

//         {/* Submit */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <input type="submit" value="Connect With Us" />
//           </div>
//         </div>

//         {/* Status Message */}
//         {status && (
//           <div className="col-lg-12">
//             <p>{status}</p>
//           </div>
//         )}
//       </div>
//     </form>
//   )
// }














// 'use client'
// import React, { useState } from 'react'

// export default function ContactForm() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [phoneNumber, setPhoneNumber] = useState('')
//   const [countryCode, setCountryCode] = useState('+92')
//   const [status, setStatus] = useState('')
//   const [service, setService] = useState('ghostwriting') 
//   const [budget, setBudget] = useState('£999-£2000') 

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus('Sending...')

//     const cleanedNumber = phoneNumber.startsWith('0')
//       ? phoneNumber.slice(1)
//       : phoneNumber;

//     const fullNumber = `${countryCode}${cleanedNumber}`;

//     try {
//       const response = await fetch('/api', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           name,
//           email,
//           number: fullNumber,
//           message,
//           service, // Include service in the payload
//           budget, // Include budget in the payload
//         }),
//       })

//       const data = await response.json()

//       if (response.ok) {
//         setStatus('✅ Email sent successfully!')
//         setName('')
//         setEmail('')
//         setPhoneNumber('')
//         setMessage('')
//         setCountryCode('+92')
//         setService('ghostwriting') // Reset service
//         setBudget('£999-£2000') // Reset budget
//       } else {
//         setStatus(`❌ Error: ${data.error || 'Failed to send message'}`)
//       }
//     } catch (error) {
//       setStatus(`❌ Error: ${error.message}`)
//     }
//   }

//   return (
//     <form className="cmxform" id="bannerform" onSubmit={handleSubmit}>
//       <div className="row">
//         {/* Name */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <input
//               type="text"
//               placeholder="Your Name"
//               minLength={2}
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <input
//               type="email"
//               placeholder="Your Email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Country Code + Phone */}
//         <div className="col-lg-12">
//           <div className="fldset" style={{ display: 'flex', gap: '10px' }}>
//             <select
//               value={countryCode}
//               onChange={(e) => setCountryCode(e.target.value)}
//               required
//               style={{ width: '120px' }}
//             >
//               <option value="+92">Pakistan (+92)</option>
//               <option value="+1">United States (+1)</option>
//               <option value="+44">United Kingdom (+44)</option>
//               <option value="+91">India (+91)</option>
//             </select>
//             <input
//               type="tel"
//               placeholder="Contact Number"
//               required
//               minLength={7}
//               maxLength={15}
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               style={{ flex: 1 }}
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <textarea
//               placeholder="Talk About Your Project"
//               rows={7}
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//             />
//           </div>
//         </div>

//         {/* Select Service */}
//         <div className="col-md-6">
//           <div className="form-floating">
//             <label htmlFor="floatingSelect" style={{ color: "#000" }}>
//               Select Service
//             </label>
//             <select
//               className="form-select"
//               id="floatingSelect"
//               required
//               name="Services"
//               value={service} // Bind service to state
//               onChange={(e) => setService(e.target.value)} // Update service on change
//             >
//               <option value="ghostwriting">ghostwriting</option>
//               <option value="book cover">book cover</option>
//               <option value="illustration">illustration</option>
//               <option value="publishing">publishing</option>
//             </select>
//           </div>
//         </div>

//         {/* Select Budget */}
//         <div className="col-md-6">
//           <div className="form-floating">
//             <label htmlFor="floatingSelect" style={{ color: "#000" }}>
//               Select Budget
//             </label>
//             <select
//               className="form-select"
//               id="floatingSelect"
//               required
//               name="budget"
//               value={budget} // Bind budget to state
//               onChange={(e) => setBudget(e.target.value)} // Update budget on change
//             >
//               <option value="£999-£2000">£999-£2000</option>
//               <option value="£2000-£3000">£2000-£3000</option>
//               <option value="£3000-£4000">£3000-£4000</option>
//               <option value="£4000-£5000">£4000-£5000</option>
//             </select>
//           </div>
//         </div>

//         {/* Submit */}
//         <div className="col-lg-12">
//           <div className="fldset">
//             <input type="submit" value="Connect With Us" />
//           </div>
//         </div>

//         {/* Status Message */}
//         {status && (
//           <div className="col-lg-12">
//             <p>{status}</p>
//           </div>
//         )}
//       </div>
//     </form>
//   )
// }
