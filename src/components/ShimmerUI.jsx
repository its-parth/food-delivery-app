const ShimmerUI = () => {
    const arr = new Array(10).fill(0);
    return <><div className='top-rated-btn border-2 border-black select-none m-2 inline-block p-2 cursor-pointer bg-red-500 text-white'>Top Rated Restaurants</div>
    <div className="border-2 m-2 rest-container flex flex-wrap p-2 justify-evenly gap-y-4 bg-blue-400">
            {
                arr.map((_, index) => {
                return <div key={index} className="rest-card w-[270px] h-[397px] border-red-600 border-2 p-2 flex flex-col gap-3.5 bg-blue-100 cursor-pointer"></div>
                })    
            }
        
        </div>
    </>
}

export default ShimmerUI;