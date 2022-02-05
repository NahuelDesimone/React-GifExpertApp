import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs fetch', () => {

    test('debe de traer 10 elementos', async() => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    });

    test('si no mando la categoria como parametro no me debe traer nada', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
      
    });
    
});
