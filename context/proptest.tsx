import React from 'react'
'use client'

type PropTestProps = {
    backgroundColour: string;
    fontsize: string;
}

/* export default function PropTest({backgroundColour, fontsize}:
    PropTestProps) {
  return (
    <div>PropTest</div>
  )
} */

/* When wrapping a  component with a custom component, such as button, instead of typing all individual attributes such as "href", "alt" for a tags, or the different button properites you can pass in React.ComponentProps<"button"> to accept all button attributes.*/


/* type ButtonProps = React.ComponentProps<"button">

export default function Button(
    {type, autoFocus }: ButtonProps
) {
  return (
    <button>proptest</button>
  )
}
 */

/* import React from 'react'

type ButtonProps = {
    autoFocus?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function ButtonProps({type, autoFocus }: ButtonProps) {
  return (
    <button>ButtonProps</button>
  )
}
 */

/* with interface you can only type "objects" whereas with type you can type aything, even a string for example */


/* setSTATE typing */
/* when state is being held in the parent component */


/* and we want to pass our state into a button component */

/* export default function Home() {
const [count, setCount] = React.useState(0)
  return (
    <>
    <div>Home</div>
    <Button count={count} setCount={setCount} />
    </>
  )
} 

const buttonType = {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    count: number;  
}

export default function Button(
    {count, setCount}: buttonType
    ) {
  return (
    <button>Click me!</button>
  )
}
 */

/* import React from 'react'

export default function Home() {
  return (
    <Button>Home</Button>
  )
}

ButtonType = {
    children: React.ReactNode;
}


export default function Button({children}: ButtonType) {
  return (
    <div>{children}</div>
  )
}
 */

/* dealing with event handlers  */


/* first you write out the event handler function inline, and hover so you can see the type of the event object, and then you can copy and paste it into the function type annotation
for example here we get e: React.MouseEvent<HTMLButtonElement, MouseEvent>

import React from 'react'

export default function eventhandlers() {
  return (
    <button onClick = {(e) =>  console.log("clicked")}>eventhandlers</button>
  )
}
 */

/* import React from 'react'

Now we can define the type of the event handler function

export default function proptest() {
    const onClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {console.log("clicked")}

  return (
    <button onClick={onClick}>proptest</button>
  )
} */


/* Typing hooks, the majority of hooks are typed out of the box for example  */

/* export default function c() {
const [count, setCount] = React.useState(0)
const [name, setName] = React.useState("")
const [loading, setLoading] = React.useState(false) */
/* here you react recognises that either a number, string or boolean will be used so no typing is necessary. IF you want to type anyway, you can but its not necessary */
/* const [count1, setCount1] = React.useState<number>(0)
 *//* HOWEVER, when we are using state for example a user, that we initially want to set to "null, problems arise " */
/* type User = {
    nane: string;
    age: number;
}

const [user, setUser] = React.useState<User | null >(null)

const username = user?.name

  return (
    <div>c</div>
  )
} */
