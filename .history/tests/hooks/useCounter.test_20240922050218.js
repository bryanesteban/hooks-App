import { renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
import { act } from "react";


describe('Pruebas en el useCounter', () => {

    test('debe de retornar los valores por defencto', () => {

        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;


        expect( counter).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ));
        expect( increment ).toEqual( expect.any( Function ));
        expect( reset ).toEqual( expect.any( Function ));


    });

    test('debe de generar el counter con el valor de 100', () => { 
        const { result } = renderHook( () => useCounter(100));
        const { counter } = result.current;
        expect(counter).toBe(100);
     })

     test('debe de incrementar el contador', () => { 

        const { result } = renderHook( () => useCounter() );
        const { counter, increment } = result.current;

        act( () => {
            increment();
        })

        expect( counter ).toBe(11);

      })

});