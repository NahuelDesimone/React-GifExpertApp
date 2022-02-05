import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

const titulo = "Un titulo"
const url = "https://localhost/algo.jpg"
const wrapper = shallow(<GifGridItem title= { titulo } url = { url }/>);

describe('Pruebas en GifGridItem', () => {
  
    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un parrafo con el titulo', () => {

        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(titulo);
      
    });

    test('debe de obtener la imagen igual a la url que le envio por el props', () => {

        const img = wrapper.find('img');

        console.log(img.props());

        expect(img.prop('src')).toBe( url );

        expect(img.prop('alt')).toBe( titulo );
        
    });

    test('debe de tener animate_fadeIn', () => {

        const div = wrapper.find('div');

        const className = div.props().className

        expect(className.includes('animate__fadeIn')).toBe(true);
      
    });
    
});
