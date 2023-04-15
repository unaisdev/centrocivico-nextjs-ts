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
                className="bg-gradient-to-b from-white via-gray-300 to-white py-8"
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
                            max: 1920,
                            min: 1780
                        },
                        items: 7,
                        partialVisibilityGutter: 40,
                    },
                    semisemi: {
                        breakpoint: {
                            max: 1780,
                            min: 1540
                        },
                        items: 6,
                        partialVisibilityGutter: 30
                    },
                    semi: {
                        breakpoint: {
                            max: 1540,
                            min: 1300
                        },
                        items: 5,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1300,
                            min: 980
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    },
                    mobilelandscape: {
                        breakpoint: {
                            max: 980,
                            min: 580
                        },
                        items: 3,
                        partialVisibilityGutter: 30
                    },
                    mobile: {
                        breakpoint: {
                            max: 580,
                            min: 0
                        },
                        items: 2,
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
                <div className='flex justify-center items-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg-lg w-[160px] sm:w-[200px] md:w-[250px]">
                        <div className="relative rounded-lg ">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80" />

                        </div>
                        <div className="px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1543992321-cefacfc2322e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1548783701-178830d050f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />

                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1616669944447-d65d41a222bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1454&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1499715217757-2aa48ed7e593?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1560963805-6c64417e3413?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1436&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1543738066-49621e5b1f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1441&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1542528180-1c2803fa048c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="max-w-xs bg-white rounded-md shadow-lg ">
                        <div className="relative rounded-lg w-[160px] sm:w-[200px] md:w-[250px]">
                            <img className="rounded-t-md" src="https://images.unsplash.com/photo-1677051707499-87ea304987b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                        </div>
                        <div className="w-[160px] sm:w-[200px] md:w-[250px] px-4 py-2 bg-gray-800 opacity-70 rounded-b-md">
                            <h3 className="text-xs text-white font-bold">
                                Muslitos de pollo a la brasa</h3>
                        </div>
                    </div>
                </div>

            </Carousel>
        </>
    )
}

export default FoodCarousel;