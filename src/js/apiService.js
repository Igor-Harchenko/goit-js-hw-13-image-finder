const API_KEY = '23024944-26babadae282d834971f263ad';

export default function fetchImages(searchQuery, pageNumber) {
  return (
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`,
    )
      .then(response => response.json())

      .catch(error => Promise.reject(error))
  );
}
