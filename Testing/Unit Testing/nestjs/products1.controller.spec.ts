////These are sample test cases for unit testing in nestjs, where we mock the service irrespective of the fact that the service is injecting multiple dependencies

////import all the necessary things
import { createMock } from "@golevelup/ts-jest";
import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { ConsumeProductDto } from "./dto/consume-product.dto";
import { ProductSchema } from "./schemas/products.schema";

const testCat1 = "Test Cat 1";
const testBreed1 = "Test Breed 1";

describe("ProductsController", () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            getProducts: jest
              .fn()
              // .mockResolvedValue([
              //   { name: testCat1, breed: testBreed1, age: 4 },
              // ]),
              .mockReturnValue([{ name: testCat1, breed: testBreed1, age: 4 }]),
          },
        },
      ],
    }).compile();
    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  ////testing the controller initializing
  // it('should be defined', () => {
  //   expect(controller).toBeDefined();
  // });

  // it('calling getProducts method', () => {
  //   const getProductsSpy = jest.spyOn(controller, 'getProducts');
  //   controller.getProducts();
  //   expect(getProductsSpy).toHaveBeenCalledWith();
  // });

  describe("getCats", () => {
    it("should get an array of cats", () => {
      const result = controller.getProducts();
      console.log("result is: ", result);
      ////when using the promised return for mock it will just check that the promise is returning irrespective of the result like if age=6 it will still pass the test, that is why we converted it into mockReturnValue
      // expect(result).resolves.toEqual([
      expect(result).toEqual([
        {
          name: testCat1,
          breed: testBreed1,
          age: 4,
        },
      ]);
    });
  });
});
