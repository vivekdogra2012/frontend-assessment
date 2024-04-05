import React from 'react';
import ImageCard from './ImageCard';
import TextCard from './TextCard';
import img1 from '../assets/Images/1000132330.png';
import img2 from '../assets/Images/1000132331.png';
import img3 from '../assets/Images/1000132332.png';

const MeetOurCommunity = ({visibility}) => {

    return (
        <div className="meet-our-community">
            <div className='leftBlock'>
                <div className='heading'>
                    Meet Our Community
                </div>
                <button className='knowMore'>Know More</button>
                <p>LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</p>
            </div>
            <div className={`slow-appear-content ${visibility ? 'visible' : ''}`}>
                <div className='item'>
                    <div className='content-row alignRight content-row1'>
                        <div className='compGroup rightCard layout1' >
                            <ImageCard img={img1} />
                            <TextCard text={`It's taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto`} header='@buzzfeedfood' comments={60} likes={16.7}/>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="content-row content-row2">
                        <div className='compGroup rightCard layout2' >
                            <TextCard text={`Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood`} header='@love_food' comments={789} likes={99.7}/>
                            <ImageCard img={img2} />
                        </div>
                    </div>
                </div>
                <div className='item'>
                <div className="content-row spaceBetween alignRight content-row3">
                    <div className='leftText'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.
                    </div>
                    <div className='compGroup rightCard layout3'>
                        <TextCard text={`Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)`} header='@buzzfeedfood' comments={152} likes={2}/>
                        <ImageCard img={img3} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MeetOurCommunity;
