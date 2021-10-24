### To-do List:
- [] fix Kadia's VS code / git issue
- [] look for mentor to ask about grab {value} for skinFax-api 


hello world

-Categories: Ex. #oily that sets post to a category,
-no segregation to specifics categories can see all but filter.

-note-
in case of inacurracy, take quiz again
^calendar update reminder
-Ex. dry skin due to dehydration vs actual dry skin

*Below for building quiz*
import { useState } from "react"

export default function Component(props){
  const [formData, setFormData] = useState({
    name:"",
    age:""
  })
  const [step, setStep] = useState(0)


  return (
    <form>
      {step === 0 && <input type="text" name="name"/>}
      {step === 1 && <input type="text" name="age"/>}
    </form>
  )
}