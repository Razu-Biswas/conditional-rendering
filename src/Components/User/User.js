import React from 'react';

const User = (props) => {
    let familiar = props.familiar;
    let greetings;
    if(familiar){
        greetings = <p>Welcome, My friend.</p>
    }
    else{
        greetings = <p>Who the hell are you?</p>
    }

    //   const greetings2 = familiar ? <p>Welcome, My friend.</p>
    //     :greetings2 = <p>Who the hell are you?</p>

    // javascript ternary operator 
    // const greetings3 = familiar ? 'hello' : 'gello';

    // logical conditional 
    // const number = 3;
    // if( number > 5 && familiar === true ){

  //  }


    return (
        <div>
            <div>
            <h2>Greetings</h2>
            {greetings} 
            </div>
            <div>
                <h2>Food</h2>
                {/* use javascript ternary operator */}
                {
                    familiar
                     ?  <p>I will buy for you.</p> 
                    : <p>Lets est his his whose whose?</p>
                }
                 
            </div>
            <div>
                <h2>Connection</h2>
                {/*  logical condition use  */}
                {
                    familiar && <p>Let's join my facebook</p>
                }
                
                {/* <p>I don't add stranger?</p> */}
            </div>
        </div>
    );
};

export default User;