import React from 'react'
import "./styles/main.css"
import {AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom'

const SendBulk = () => {
  return (
    <div className='sendBulkPage'>
        <div className='main-div'>
            <div className='header-div'>
                <h1>Send Bulk Messages</h1>
                <Link to="/">
                    <AiOutlineClose size={20}  />
                </Link>
            </div>
            <div className='body-div'>
                <form>
                    <div>
                        <label>Template-ID</label>
                        <br />
                        <input className='text-input' type="text" />
                    </div>
                    <div>
                        <label>Token</label>
                        <br />
                        <input className='text-input'  type="text" />
                    </div>
                    <div>
                        <label>Phone Number ID</label>
                        <br />
                        <input className='text-input' type="text" />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <br />
                        <input className='text-input' type="text" />
                    </div>
                    <div>
                        <label>Ex Range</label>
                        <br />
                        <input className='text-input' type="text" />
                    </div>
                    <div>
                        <label>Language Code</label>
                        <br />
                        <input className='text-input' type="text" />
                    </div>

                    <div>
                        <label>To all Customer</label>
                        <input className='check-input' type="checkbox" />
                    </div>
                </form>
                    <div className='customer-phoneNo-div'>
                        <label>Remove Customer</label>
                        <input className='text-input' />
                        <button>Remove</button>
                    </div>
                <div className='button-div'>
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendBulk;
