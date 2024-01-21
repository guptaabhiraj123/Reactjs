import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, Setcount] = useState(0)
    const [item, Setitem] = useState(10)

    // function multicount(){
    //     console.log('multicount')
    //     return count*5

    // }
    const multicountmemo = useMemo(
        function multicount() {
            console.log('multicount')
            return count * 5
        },
        [count]
    )
    return (
        <>
            <h1>UseMemo hooks</h1>
            <h1>hooks in react: {count}</h1>
            <h1>hooks in item: {item}</h1>
            {/* <h2>{multicount()}</h2> */}
            <h1>{multicountmemo}</h1>
            <button onClick={() => Setcount(count + 1)}>update count</button>
            <button onClick={() => Setitem(item * 10)}>update item</button>


        </>
    )
}

export default UseMemo