import * as API from './apiCalls';
import { mockData } from './mockData';

describe('API', () => {
  const { films, people, planets, vehicles } = mockData;
  beforeEach(() => {});

  describe('fetch films', () => {
    it('should call fetch with the correct params', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(films);
          },
          ok: true
        });
      });

      const expected = 'https://swapi.co/api/films/';

      await API.fetchFilms();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should throw an error if fetch fails', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('films not fetched');

      expect(API.fetchFilms()).rejects.toEqual(expected);
    });
  });

  describe('fetch people', () => {
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(people);
          },
          ok: true
        });
      });

      const expected = 'https://swapi.co/api/people/';
      API.fetchPeople();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should throw an error if fetch fails', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('people not fetched');

      expect(API.fetchPeople()).rejects.toEqual(expected);
    });
  });

  describe('fetch vehicles', () => {
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(vehicles);
          },
          ok: true
        });
      });

      const expected = 'https://swapi.co/api/vehicles/';
      API.fetchVehicles();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should throw an error if fetch fails', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('vehicles not fetched');

      expect(API.fetchVehicles()).rejects.toEqual(expected);
    });
  });

  describe('fetch planets', () => {
    it('should call fetch with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve(planets);
          },
          ok: true
        });
      });
      const expected = 'https://swapi.co/api/planets/';
      API.fetchPlanets();

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should throw an error if fetch fails', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('planets not fetched');

      expect(API.fetchPlanets()).rejects.toEqual(expected);
    });
  });
});
