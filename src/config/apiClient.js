export const apiUrlGraphQl = "https://rickandmortyapi.com/graphql";

export const getDetailCharacter = (id) => {
  return `query 
    {character (id: ${id}) 
    {id,name,status,species,gender,image,origin {id,name}location {id,name,dimension}, episode{id,name,created}}}
    `;
};

export const getDimensions = `query 
    {locations{
      results{
        dimension
      }
    } }`;

export const getCharactersByDimensions = (dimension) => {
  return `query 
    {locations (filter: {dimension:"${dimension}"}) 
    {results {dimension residents {id,name,status,species,gender,image, location {id,name}, episode{id,name,created}}}}}`;
};

export const getEpisodes = `query 
{episodes(page: 2){
  results{
    id
   name
  }
} }`;

export const getCharactersByEpisodes = (episode) => {
  return `query 
  {episode (id:${episode}) 
  {id,name,characters {id,name,status,species,gender,image,location {id,name}}}}
  `;
};

export const getLocations = `query 
{locations{
  results{
    name
  }
} }`;

export const getCharactersByLocations = (location) => {
  return `query 
  {locations (filter: {name:"${location}"}) 
  {results {name,residents {id,name,status,species,gender,image,episode{id,name,created}}}}}`;
};

export const getAllEpisodes = (pageNumber) => {
  return `query 
{episodes(page:${pageNumber})
{info{next,prev}
results{id,name,episode,air_date}}}
`;
};
