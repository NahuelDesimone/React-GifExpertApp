import { shallow } from "enzyme";
import React from 'react';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('debe de generarse el snapshot correctamente', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto donde se hace el input', () => {

        const input = wrapper.find('input');
        const value = "Hola mundo";
        
        input.simulate('change', {
            target: {value}
        });

        expect(wrapper.find('p').text().trim()).toBe(value);
    });


    test('NO debe postear la informacion al hacer submit si no se ingresa nada', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar al setCategories y se debe limpiar la caja de texto', () => {

    const value = "Hola";

      // 1. Simular el input change 
      wrapper.find('input').simulate('change', { target: {value}});

      // 2. Simular el el submit 
      wrapper.find('form').simulate('submit', {preventDefault(){}});

      // 3. Se debe de haber llamado setCategories al menos 1 vez
      expect(setCategories).toHaveBeenCalled();
      expect(setCategories).toHaveBeenCalledTimes(1);

      // 4. El valor (value) del input debe de estar vacio
      expect(wrapper.find('input').prop('value')).toBe('');

    });
    
    
});
