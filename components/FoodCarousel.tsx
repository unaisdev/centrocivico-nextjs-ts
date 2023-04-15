import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import './foodCarousel.css'

const FoodCarousel = () => {
    return (
        <>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                className="bg-gradient-to-b from-white via-gray-200 to-white  py-8"
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={100}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1140
                        },
                        items: 6,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 660,
                            min: 0
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1140,
                            min: 660
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={1}
                swipeable
                removeArrowOnDeviceType={"mobile"}
            >
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative rounded-lg w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="relative w-[180px] md:w-[250px]">
                            <img className="rounded-md" src="https://www.kindacode.com/wp-content/uploads/2022/06/big-boss.jpeg" />
                            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                                <h3 className="text-xs text-white font-bold">
                                    Muslitos de pollo a la brasa</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default FoodCarousel;