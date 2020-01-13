import React from 'react'
import puce from './puce.png'
import visa from './visa.jpeg'


const CreditCard = props => {

    return (

        <div className="CreditCard">
            <h1 class="titre">CREDIT CARD</h1>
            <img className="puce" src={puce}></img>

            <div className="container">

                <div className="container-2">

                    <p className="num">{props.infos.number  === "" ? "**** **** **** ****" : props.infos.number.padEnd(16,"*").replace(/\d{4}(?=.)/g, '$& ') }</p>

                    <p className="date">MONTH/YEAR</p>

                    <div className="details">
                        <p className="code">5422</p>

                        <div className="container-3">
                            <p className="validation">VALID<br />THRU</p>

                            <p className="date-2">{props.infos.valid ==="" ? "**/**" : props.infos.valid.slice(0,2).padEnd(2,"*")+ "/" +props.infos.valid.slice(2,4).padEnd(2,"*")}</p>
                        </div>

                    </div>

                    <p className="sous-titre">{props.infos.name.toUpperCase()}</p>

                </div>

                <img className="visa" src={visa} ></img>

            </div>


        </div>


    )

}
export default CreditCard;