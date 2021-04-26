const PlanetUseCases = require('../../../src/application/use-cases/planetUseCases');

test('it should get planet', async () => {
  const mockedPlanetData = {
    "total": 60,
    "siguiente": "http://swapi.dev/api/planets/?page=2",
    "anterior": null,
    "resulados": []
  };

  const mockPlanetRepository = {};
  mockPlanetRepository.getPlanets = jest.fn(() => {
    return mockedPlanetData;
  });

  const appContext = {
    repositories: {
      planetRepository: mockPlanetRepository
    }
  };

  const planetUseCases = new PlanetUseCases(appContext);
  const data = await planetUseCases.getPlanets();

  expect(mockPlanetRepository.getPlanets).toHaveBeenCalledWith();
  expect(data).toEqual(mockedPlanetData);
});