import React from 'react';
import {render,screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../Home/Hero'; 

describe('Hero Component',()=>{
    test('renders hero image' , () =>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("homeHero");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","/Media/Images/homeHero.png");
    });
    test('renders signup button' , () =>{
        render(<Hero/>);
        const signUpButton = screen.getByRole("button",{name : "Signup Now"});
        expect(signUpButton).toBeInTheDocument();
        expect(signUpButton).toHaveClass("btn-primary");
    });
});
