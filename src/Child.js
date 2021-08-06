import React from 'react'

const Child = (props) => {
    return (
        <div>
            <button onClick={props.MethodFromParent}> Parental Method </button>
            <form>
                <label> Parameter Value: </label>
                <input type="text" onChange={props.NextMethodFromParent} />
                <button type="button" onClick={props.HandleSubmit}> Add Entry </button>
            </form>
        </div >
    )
}

export default Child
