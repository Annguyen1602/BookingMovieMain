import { Fragment } from "react";
import { Route } from "react-router-dom";



export const HomeTemplate = (props) =>{
    const {Component, ...restProps} = props;
    return <Route {...restProps} render = {(propsRoute)=>{// props.location,...
        return <div>
            <h1 className="bg-black h-10">Đây là header homepage</h1>


            <Component {...propsRoute}/>


            
            <footer className="bg-black h-10">
                đây là footer homepage
            </footer>
        </div>

    }}/>
}