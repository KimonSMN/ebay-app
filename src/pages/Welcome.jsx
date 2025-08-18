import LoginForm from '../components/LoginForm';

function Welcome() {
  return (
    <div className="min-h-screen bg-sky-50 flex justify-center ">
        <div className="flex flex-col w-1/2 items-center align-text-center text-center pt-20 rounded ">
            <h1 className="text-sky-400 text-5xl font-bold">NAME OF THE SITE</h1>
            <h1 className="mt-5 w-128  text-gray-500 text-xl font-slim">Discover amazing deals, bid on unique items, and sell your treasures to a global audience.</h1>

            <LoginForm />
        </div>
  
    </div>
  );
}

export default Welcome;
