// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Sample crop data (replace with actual data from your backend)
  const crops = [
      { name: 'Wheat', type: 'Grain', region: 'Punjab', price: 25, quality: 'A' },
      { name: 'Rice', type: 'Grain', region: 'Andhra Pradesh', price: 30, quality: 'B' },
      // ... more crop data
  ];

  const cropListings = document.querySelector('.crop-listings');
  const filterOptions = document.querySelector('.filter-options');

  // Function to display crops
  function displayCrops(filteredCrops = crops) {
      cropListings.innerHTML = ''; // Clear existing listings
      filteredCrops.forEach(crop => {
          const cropItem = document.createElement('div');
          cropItem.classList.add('crop-item');
          cropItem.innerHTML = `<h3>${crop.name}</h3><p>Type: ${crop.type}</p><p>Region: ${crop.region}</p><p>Price: ${crop.price}</p><p>Quality: ${crop.quality}</p>`;
          cropListings.appendChild(cropItem);
      });
  }


      // Sample filter options (replace with actual filters)
      const filters = {
          type: ['Grain', 'Vegetable', 'Fruit'],
          region: ['Punjab', 'Andhra Pradesh', 'Maharashtra'],
          quality: ['A', 'B', 'C']
      };

      // Create Filter Elements Dynamically
      for (const filterName in filters) {
          const filterDiv = document.createElement('div'); // Container for each filter type
          filterDiv.innerHTML = `<h4>${filterName}</h4>`; // Filter category title

          filters[filterName].forEach(option => {
              const label = document.createElement('label');
              const checkbox = document.createElement('input');
              checkbox.type = 'checkbox';
              checkbox.id = `${filterName}-${option}`; // Unique ID
              checkbox.name = filterName; // Grouped by name
              checkbox.value = option; // Store value
              label.htmlFor = checkbox.id; // Link label to checkbox
              label.textContent = option;

              filterDiv.appendChild(checkbox);
              filterDiv.appendChild(label);
              filterDiv.appendChild(document.createElement('br')); // Add line break

          });
          filterOptions.appendChild(filterDiv);
      }




  // Initial display of crops
  displayCrops();

  // Add filter functionality (example)
  filterOptions.addEventListener('change', () => {
      const selectedFilters = {};
      for (const filterName in filters) {
        selectedFilters[filterName] = Array.from(filterOptions.querySelectorAll(`input[name="${filterName}"]:checked`)).map(cb => cb.value);
      }
      console.log(selectedFilters);
      // Apply Filtering and update displayCrops() with filtered data.
      // ... (Filtering logic based on selectedFilters)
  });
});