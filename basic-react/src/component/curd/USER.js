import React from 'react'

function USER() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <h1 className='text-center bg-info mb-2'>User Registeration</h1>
                        <form>
                            <div className='mb-3'>
                                <label>Name</label>
                                <input type='text' className='form-control' placeholder='Name'></input>

                            </div>
                            <div className='mb-3'>
                                <label>Email</label>
                                <input type='email' className='form-control' placeholder='Email'></input>

                            </div>
                            <div className='mb-3'>
                                <label>password</label>
                                <input type='password' className='form-control' placeholder='password'></input>


                            </div>
                            <button type='submit' className='btn btn-info'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default USER