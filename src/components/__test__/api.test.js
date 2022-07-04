import React from 'react';
import { render, waitFor, screen } from "@testing-library/react";
import ApiCall from "../mockFunction/apiCall";
import * as api from "../mockFunction/api"

jest.mock("../mockFunction/api.js");

describe('ApiCalling',() =>{
    test('should render apiCall name', async () => {
        api.getNameFormApi.mockResolvedValue({
                        results :[{
                            name : 'pokedex'
                        }]
                    })
        render(<ApiCall/>);
        await waitFor(()=> {
            screen.getByText('pokedex'); 
        });
    });
});
