!/bin/bash

# Create new directories
mkdir -p src/{components/{common,layout},pages,hooks,services,utils,styles,types,constants,context}
mkdir -p tests

# Move existing files
mv src/App.css src/styles/
mv src/index.css src/styles/
mv src/App.tsx src/
mv src/App.test.tsx tests/
mv src/setupTests.ts tests/
mv src/reportWebVitals.ts src/utils/

# Create placeholder files for new directories
touch src/components/common/.gitkeep
touch src/components/layout/.gitkeep
touch src/pages/.gitkeep
touch src/hooks/.gitkeep
touch src/services/.gitkeep
touch src/types/.gitkeep
touch src/constants/.gitkeep
touch src/context/.gitkeep

echo "Project structure updated successfully!"