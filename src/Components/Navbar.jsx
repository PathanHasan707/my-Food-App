import { FiShoppingCart } from "react-icons/fi";

function Navbar() {
    return (
        <div className='bg-amber-600 text-white p-3'>
            <div className='mx-auto max-w-5xl flex justify-between items-center'>
                <div className='font-bold text-3xl'>
                    Food
                </div>
                <div>
                    <FiShoppingCart className="text-3xl" />
                </div>
            </div>

        </div>
    )
}

export default Navbar;