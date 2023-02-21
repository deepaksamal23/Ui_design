import React from 'react'
import "./profile.css"
import { CiTextAlignJustify } from "react-icons/ci";
import profileimg from "../../assets/profileimg.png"
const Profile = () => {
  return (
    <>
    <div className="container">
    <div className="child">
    
    <div className='right'>
    
    <img src={profileimg} alt="logo"  className='imgpro' />
   
   <h2 className='profileName'>Diane Cooper</h2>
  <p className='mail'>diane.cooper@example.com</p>

  <span className='num'>15</span>
  <p className='past'>Past</p>

<div className="bar"></div>

<span className='num2'>02</span>
<p className='past2'>Upcomming</p>

<span className='gender'>Gender</span>
<p className='female'>Female</p>


<span className='birthday'>Birthday</span>
<p className='date'>Feb 24th, 1997</p>


<span className='phtext'>Phone Number</span>
<p className='phnumber'>(239) 555 -0108</p>

<span className='register'>Registered Date</span>
<p className='registerdate'>Feb 24th, 1997</p>

<span className='stadderss'>Street Address</span>
<p className='stads'>JL. Diponegoro No. 21</p>

<span className='city'>City</span>
<p className='cityname'>Cilacap</p>

<span className='zipcode'>Zip Code</span>
<p className='zipnum'>655849</p>


<span className='member'>Member Status</span>
<p className='memberactive'>Active Member</p>


<p className='sendmsg'>Send Message</p>


<div className="flex">
<div className="flex1">
<p>Upcoming Appointments</p>
</div>
<div className="flex2">
<p>Past Appointments</p>
</div>
<div className="flex3">
<p>Medical Records</p>
</div>
</div>

<p className='filedoco'>Files / Documents</p>

<div className="result1">
<CiTextAlignJustify className='logoreact'/>
<p className='logomg'>Check Up Results.pdf</p>
</div>

<div className="result2">
<CiTextAlignJustify className='logoreact'/>
<p className='logomg2'>Check Up Results.pdf</p>
</div>

<div className="result3">
<CiTextAlignJustify className='logoreact'/>
<p className='logomg3'>Check Up Results.pdf</p>
</div>


<div className="result4">
<CiTextAlignJustify className='logoreact'/>
<p className='logomg4'>Check Up Results.pdf</p>
</div>


<div className="cntainetlast">

<p className='root'>Root Canal Treatment</p>

<div className="show">
<p className='previews'>Show Previous Treatments</p>
</div>
<div className="barlast"></div>

<div className="firstdiv">
<p className='nov_date'>26 Nov ‘19</p>
<p className='timelast'>09.00 - 10.00</p>

<div className="firstbrk"></div>


<p className='treatment'>Treatment</p>
<p className='openacess'>Open Access</p>

<div className="firstbrk2"></div>


<div className="newlinebrk">

<p className='dent'>Dentist</p>
<p className='drg'>Drg. Adam H.</p>


<p className='nurse'>Nurse</p>
<p className='jessi'>Jessicamila</p>

</div>


<CiTextAlignJustify className='logoreact2'/>
<p className='logomg41'>Note</p>


</div>


<div className="seconddiv">
<div className="newlinebrk2">
<p className='nov_date2'>12 Nov ‘19</p>
<p className='timelast2'>09.00 - 10.00</p>

<div className="firstbrk4"></div>


<p className='treatment2'>Treatment</p>
<p className='openac2'>Root Canal</p>

<div className="firstbrk5"></div>




<p className='dent2'>Dentist</p>
<p className='drg2'>Drg. Adam H.</p>


<p className='nurse2'>Nurse</p>
<p className='jessi2'>Jessicamila</p>




<CiTextAlignJustify className='logoreact3'/>
<p className='logomg414'>Note</p>
</div>

</div>
</div>

    </div>

   

    </div>
    </div>
    </>
  )
}

export default Profile