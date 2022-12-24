import { useState,useContext } from 'react'
import { useForm } from 'react-hook-form';
import './style.css';
import { LoginContext } from './ContextProvider/Context';
function Questions() {
  const { logindata } = useContext(LoginContext);
  console.log(logindata);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  let he="hello"
const as = async()=>{he=(logindata.ValidUserOne.email)}
  
as();
const onClickSubmit = async(res) => {
  // 
  const data = await fetch("/question",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(
         res
    )
   
});
console.log(res);}
  return (
    <div className="alignment">
      <form onSubmit={handleSubmit(onClickSubmit)}>
        <h1>Questions</h1><br></br>
        <div>
        <label><h2>Enter you Email:</h2></label><br></br>
        <input value={he} {...register("email", { required: true })} />

        
        <h2>Does your company measure the carbon emissions under Scope 1,2 & 3?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="scope1">
            <input
              {...register('scope', { required: true })}
              type="radio"
              name="scope"
              value="scope1"
              className="questions-check-input"
              id="scope1"
            />{' '}
            Scope 1
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="scope2">
            <input
              {...register('scope', { required: true })}
              type="radio"
              name="scope"
              value="scope2"
              className="questions-check-input"
              id="scope2"
            />{' '}
            Scope 2
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="scope3">
            <input
              {...register('scope', { required: true })}
              type="radio"
              name="scope"
              value="scope3"
              className="questions-check-input"
              id="scope3"
            />
            Scope 3
          </label>
        </div>
        <div class="error">
          {errors.scope?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>
        
        <div>
        <h2>Does your company have KPIs for carbon emissions, Water consumption , waste reduction and other sustainability factors ?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno1">
            <input
              {...register('yesno1', { required: true })}
              type="radio"
              name="yesno1"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno1">
            <input
              {...register('yesno1', { required: true })}
              type="radio"
              name="yesno1"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno1?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Does the company perform Environmental Impact analysis and measure it's impacts on land, water and air ?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno2">
            <input
              {...register('yesno2', { required: true })}
              type="radio"
              name="yesno2"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno2">
            <input
              {...register('yesno2', { required: true })}
              type="radio"
              name="yesno2"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno2?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Does your company have a sustainable procurement policy in place?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno3">
            <input
              {...register('yesno3', { required: true })}
              type="radio"
              name="yesno3"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno3">
            <input
              {...register('yesno3', { required: true })}
              type="radio"
              name="yesno3"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno3?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Does your company have a committee for sustainability?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno4">
            <input
              {...register('yesno4', { required: true })}
              type="radio"
              name="yesno4"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno4">
            <input
              {...register('yesno4', { required: true })}
              type="radio"
              name="yesno4"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno4?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Is your company eligible for CSR and has a CSR committee?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno5">
            <input
              {...register('yesno5', { required: true })}
              type="radio"
              name="yesno5"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno5">
            <input
              {...register('yesno5', { required: true })}
              type="radio"
              name="yesno5"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno5?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Is there Extended Producer Responsibility (EPR) plan in place, if it applies? </h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno6">
            <input
              {...register('yesno6', { required: true })}
              type="radio"
              name="yesno6"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno6">
            <input
              {...register('yesno6', { required: true })}
              type="radio"
              name="yesno6"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno6?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Has the company performed Life Cycle Assessement (LCA) for all of it's products? </h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno7">
            <input
              {...register('yesno7', { required: true })}
              type="radio"
              name="yesno7"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno7">
            <input
              {...register('yesno7', { required: true })}
              type="radio"
              name="yesno7"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno7?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>  Has the company performed Social Impact Assessment ?  </h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno8">
            <input
              {...register('yesno8', { required: true })}
              type="radio"
              name="yesno8"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno8">
            <input
              {...register('yesno8', { required: true })}
              type="radio"
              name="yesno8"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno8?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Is there board-level oversight of climate-related issues within your organization? </h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno9">
            <input
              {...register('yesno9', { required: true })}
              type="radio"
              name="yesno9"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno9">
            <input
              {...register('yesno9', { required: true })}
              type="radio"
              name="yesno9"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno9?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Does your organization’s strategy include a transition plan that aligns with a 1.5°C world?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno10">
            <input
              {...register('yesno10', { required: true })}
              type="radio"
              name="yesno10"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno10">
            <input
              {...register('yesno10', { required: true })}
              type="radio"
              name="yesno10"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno10?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Has the company performed climate risk assessment and have adaptation & mitigation strategies in place?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno11">
            <input
              {...register('yesno11', { required: true })}
              type="radio"
              name="yesno11"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno11">
            <input
              {...register('yesno11', { required: true })}
              type="radio"
              name="yesno11"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno11?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Do you engage with your value chain on climate-related issues?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno12">
            <input
              {...register('yesno12', { required: true })}
              type="radio"
              name="yesno12"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno12">
            <input
              {...register('yesno12', { required: true })}
              type="radio"
              name="yesno12"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno12?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Has your organization made a public commitment and/or endorsed any initiatives related to biodiversity?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno13">
            <input
              {...register('yesno13', { required: true })}
              type="radio"
              name="yesno13"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno13">
            <input
              {...register('yesno13', { required: true })}
              type="radio"
              name="yesno13"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno13?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Does your organization assess the impact of its value chain on biodiversity?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno14">
            <input
              {...register('yesno14', { required: true })}
              type="radio"
              name="yesno14"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno14">
            <input
              {...register('yesno14', { required: true })}
              type="radio"
              name="yesno14"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno14?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Does your organization use biodiversity indicators to monitor performance across its activities?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno15">
            <input
              {...register('yesno15', { required: true })}
              type="radio"
              name="yesno15"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno15">
            <input
              {...register('yesno15', { required: true })}
              type="radio"
              name="yesno15"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno15?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Name of the national and international codes/certifications/labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your organisation</h2>
        <div className="questions-check mt-3">
          <label htmlFor="standard">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="SA 8000"
              className="questions-check-input"
              id="yes"
            />{' '}
            SA 8000
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="standard">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="OHSAS"
              className="questions-check-input"
              id="OHSAS"
            />{' '}
            OHSAS
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="standard">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="ISO"
              className="questions-check-input"
              id="ISO"
            />{' '}
            ISO
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="standard">
            <input
              {...register('standard', { required: true })}
              type="radio"
              name="standard"
              value="BIS"
              className="questions-check-input"
              id="BIS"
            />{' '}
            BIS
          </label>
        </div>
        <div class="error">
          {errors.standard?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Is there a mechanism for zero liquid discharge?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno16">
            <input
              {...register('yesno16', { required: true })}
              type="radio"
              name="yesno16"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno16">
            <input
              {...register('yesno16', { required: true })}
              type="radio"
              name="yesno16"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno16?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2>Has the organisation applied for science based target initiatives (SBTi)?</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno17">
            <input
              {...register('yesno17', { required: true })}
              type="radio"
              name="yesno17"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno17">
            <input
              {...register('yesno17', { required: true })}
              type="radio"
              name="yesno17"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno17?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Does the organisation apply for any ratings system to measure it's sustainability performance ? (Eg: CDP, Ecovadis, B corp etc)</h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno18">
            <input
              {...register('yesno18', { required: true })}
              type="radio"
              name="yesno18"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno18">
            <input
              {...register('yesno18', { required: true })}
              type="radio"
              name="yesno18"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno18?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>

        <div>
        <h2> Does your organisation make a yearly ESG or sustainability report publicly available ? </h2>
        <div className="questions-check mt-3">
          <label htmlFor="yesno19">
            <input
              {...register('yesno19', { required: true })}
              type="radio"
              name="yesno19"
              value="yes"
              className="questions-check-input"
              id="yes"
            />{' '}
            yes
          </label>
        </div>
        <div className="questions-check">
          <label htmlFor="yesno19">
            <input
              {...register('yesno19', { required: true })}
              type="radio"
              name="yesno19"
              value="no"
              className="questions-check-input"
              id="no"
            />{' '}
            no
          </label>
        </div>
        <div class="error">
          {errors.yesno19?.type === 'required' &&
            'Please select an option'}
        </div>
        </div>


        <button type="submit" class="button">
          Submit
        </button>
      </form>
    </div>
  )
}
export default Questions