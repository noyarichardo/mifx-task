import React, { useState } from "react";
import Image from "next/image";
import styles from "../ImgSlide/Slide.module.css";
import {FaCaretRight, FaCaretLeft} from "react-icons/fa"
import { SliderData } from "./ImgData";
import { reviewDatatext } from "./reviewData";
import { reviewDataN } from "./reviewData";
import { reviewDataTag } from "./reviewData";


export default function CSlide() {
    const myslideImg = SliderData;
    const myslideReview = reviewDatatext;
    const myslideReviewN = reviewDataN;
    const myslideReviewT = reviewDataTag;

    const [currentSlide, setCurrent] = useState(0);
    const length = myslideImg.length && myslideReview.length;


    const nextSlide = () => {
        setCurrent(currentSlide === length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrent(currentSlide === 0 ? length - 1 : currentSlide - 1);
    };


    return (
        <>
        <div className={styles.slider}>
            
                <div className={styles.slide_section}>
                    {myslideImg.map((slides, index) => {
                        return (
                            <div className={ index === currentSlide ? 'slide active' : 'slide'} key={index}>
                                {index === currentSlide && (
                                    <Image key={index} className={styles.carousel_item} src={slides}  width={350} height={350} layout='responsive' alt="slide" />
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className={styles.wrap_reviews}>
                    <h3 className={styles.title_reviews}>Reviews</h3>

                    <div className={styles.wrap_arrow}>
                        <span className={styles.icon_left}>
                            <FaCaretLeft className={styles['arrow-left']} onClick={prevSlide}/>
                        </span>
                        <span className={styles.icon_right}>
                            <FaCaretRight className={styles['right-left']} onClick={nextSlide}/>
                        </span>
                    </div>

                    {myslideReviewT.map((slideT, index)=>{
                        return (
                            <div className={ index === currentSlide ? 'tag_item active' : 'tag_item'} key={index}>
                                {index === currentSlide && (
                                    <div>
                                        <h5 className={styles.review_t}>{slideT}</h5>
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    {myslideReview.map((slideR, index)=>{
                        return (
                            <div className={ index === currentSlide ? 'review_item active' : 'review_item'} key={index}>
                                {index === currentSlide && (
                                    <div>
                                        <blockquote className={styles.b_reviews}>
                                            <p className={styles.p_reviews}>{slideR}</p>
                                        </blockquote>
                                    </div>
                                    
                                )}
                            </div>
                        )
                    })}

                    {myslideReviewN.map((slideN, index)=>{
                        return (
                            <div className={ index === currentSlide ? 'name_item active' : 'name_item'} key={index}>
                                {index === currentSlide && (
                                    <div>
                                        <h6 className={styles.review_n}>{slideN}</h6>
                                    </div>
                                    
                                )}
                            </div>
                        )
                    })}

                    <div className={styles.wrap_dot}>
                        {myslideImg.map((slideDot, index)=>{
                            return (
                                <div className={ index === currentSlide ? 'dot_item active' : 'dot_item'} key={index}>
                                    {index === currentSlide && (
                                        <span key={slideDot} className={styles.dot_item}></span>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                </div>
            
            </div>
        </>

    )
}
