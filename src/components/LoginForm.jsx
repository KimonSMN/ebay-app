import React from 'react'
import { Link } from 'react-router-dom';



const LoginForm = () => {
    
    const [activeTab, setActiveTab] = React.useState('signIn');

    return (
        <div className='mt-20 flex items-center justify-center px-4'>
                <div className="max-w-sm bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-bold text-sky-500 text-center ">Welcome Back!</h2>
                <h2 className="text-sm text-gray-500 text-center ">Sign in to your account</h2>
                <div className="mt-3 flex bg-gray-100 rounded-sm h-10 justify-around items-center "> 
                    <button className={`ml-1 cursor-pointer text-sm font-medium w-1/2 h-8 flex items-center justify-center rounded-sm transition ${activeTab === 'signIn' ? 'bg-white text-black' : 'bg-transparent text-gray-500'}`}
                    onClick={() => setActiveTab('signIn')}> 
                        Sign in
                    </button>
                    <button className={`mr-1 cursor-pointer text-sm font-medium w-1/2 h-8 flex items-center justify-center rounded-sm transition ${activeTab === 'register' ? 'bg-white text-black' : 'bg-transparent text-gray-500'}`} 
                    onClick={() => setActiveTab('register')}>
                        Register
                    </button>
                </div>

                {activeTab === 'signIn' ? (
                    <form className="mt-3 space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        <div className="flex justify-between">
                            <div>
                                <label>
                                    <input className="border-gray-300" type="checkbox" />
                                    <span className="ml-1 text-gray-600">Remember me</span>

                                </label>
                            </div>
                            <div className="text-gray-600">
                                <Link to="/forgotpass">Forgot password?</Link>
                            </div>
                        </div>
                        <Link to="/main"> 
                            <button type="submit" className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                                Sign In
                            </button>
                        </Link>
                    </form>
                ) : activeTab === 'register' ? (
                    <form className="mt-3 space-y-4">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full border border-gray-300 p-2 rounded"
                        />
                        <Link to="/main"> 
                            <button type="submit" className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                                Create Account
                            </button>
                        </Link>
                    </form>
                ) : null}

                
            </div>
        </div>  
    )
}

export default LoginForm
