### To-do List:

1- ig beauty base app
2-filters into makeup related

* _NOTE_ db-> server -> client so render db data thru server file to show on client. server = middle man

  -Categories: Ex. #oily that sets post to a category,
  -no segregation to specifics categories can see all but filter.

  -note-
  in case of inacurracy, take quiz again
  ^calendar update reminder
  -Ex. dry skin due to dehydration vs actual dry skin

  _Below for building quiz_
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
