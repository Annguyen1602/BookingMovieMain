import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";



export const HomeTemplate = (props) =>{
    
    const {element, ...restProps} = props;
    console.log(restProps);
    
    
    return <Routes>
        <Route {...restProps} render = {(propsRoute)=>{// props.location,...
        return <Fragment>
            <h1 className="bg-black h-10">Đây là header homepage</h1>


            <element {...propsRoute}/>


            
            <footer className="bg-black h-10">
                đây là footer homepage
            </footer>
        </Fragment>

    }} ></Route>
    </Routes>
}