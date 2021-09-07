'use strict';
const server = require('../server');


const supertest = require('supertest');
const request = supertest(server.app);




// const makeApp =require('')
// const  jest  =require('jest')

// const createUser = jest.fn()
// const getUser = jest.fn()

// const app = makeApp({
//   createUser,
//   getUser
// })

// let users = {
//     admin: {email:"tessss@tess.com", username: 'tere', password: '123' },
   
//   };
  

// jest.setTimeout(150000);

describe('my book routes', ()=> {

    // beforeEach(() => {
    //     createUser.mockReset()
    //     createUser.mockResolvedValue(0)
    //   })

    it('handles not found request', async () => {
        // add test
        const response = await request.get('/asd'); // async
        expect(response.status).toEqual(404);
    });

        
    it('/ route works', async () => {
        const response = await request.get('/'); // async
        expect(response.status).toEqual(200);
      
        expect(response.text).toEqual('hello world');
    });
    it('can get one book', async() => {
        const res = await request.get(`/book/1`);
        expect(res.status).toBe(200); 
      });
    
    it('get all books ', async () => {
        const response = await request.get('/book'); 
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); 
    });
 
    // it('add data from /book ', async () => {
    //     let obj1 = { title: 'qwe', author: "tesr", image: 'testt' };
    // return request.post('/book').send(obj1).then(res =>{
    //     expect(res.status).toEqual(200);
    // })
  
      it(' Add book and  delete book ', async() => {
            let obj1 = { title: 'yuyuiyu', author: "tesr", image: 'testt' };
         
          const response1 = await request.post('/book/').send(obj1);
          console.log("respppppppppppppppp111111111",response1.body.id);
          const response2 = await request.delete(`/book/${response1.body.id}`);
          expect(response2.status).toBe(200);
       
        });


        // test("should  save the book in mockdatabase", async () => {
        //     let obj1 = { title: 'mockTest', author: "tesr", image: 'testt' };
        //       createUser.mockReset()
        //       await request(app).post("/users").send(obj1)
        //       expect(createUser.mock.calls.length).toBe(1)
        //       expect(createUser.mock.calls[0][0]).toBe(obj1.title)
        //       expect(createUser.mock.calls[0][1]).toBe(obj1.author)
        //       expect(createUser.mock.calls[0][1]).toBe(obj1.image)
            
        //   })
              
 //////////////////////////////////=================================================================

 
  
  

});