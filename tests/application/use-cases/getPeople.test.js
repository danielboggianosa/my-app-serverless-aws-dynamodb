const PeopleUseCases = require('../../../src/application/use-cases/peopleUseCases');

test('it should get people', async () => {
  const mockedPeopleData = {
    "nombre": "Luke Skywalker",
    "altura": "172",
    "peso": "77",
    "color_cabello": "blond",
    "color_piel": "fair",
    "color_ojo": "blue",
    "nacimiento": "19BBY",
    "genero": "male",
    "mundo_natal": "http://swapi.dev/api/planets/1/",
    "peliculas": [
        "http://swapi.dev/api/films/1/",
        "http://swapi.dev/api/films/2/",
        "http://swapi.dev/api/films/3/",
        "http://swapi.dev/api/films/6/"
    ],
    "especies": [],
    "vehiculos": [
        "http://swapi.dev/api/vehicles/14/",
        "http://swapi.dev/api/vehicles/30/"
    ],
    "naves": [
        "http://swapi.dev/api/starships/12/",
        "http://swapi.dev/api/starships/22/"
    ],
    "creado": "2014-12-09T13:50:51.644000Z",
    "editado": "2014-12-20T21:17:56.891000Z",
    "url": "http://swapi.dev/api/people/1/"
  };

  const mockPeopleRepository = {};
  mockPeopleRepository.getPeopleById = jest.fn(() => {
    return mockedPeopleData;
  });

  const appContext = {
    repositories: {
      peopleRepository: mockPeopleRepository
    }
  };

  const peopleUseCases = new PeopleUseCases(appContext);
  const data = await peopleUseCases.getPerson('1');

  expect(mockPeopleRepository.getPeopleById).toHaveBeenCalledWith('1');
  expect(data).toEqual(mockedPeopleData);
});