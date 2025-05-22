export const capitalize = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const getTypeColor = (name) => {
  const colors = [
    'bg-red-500', 'bg-blue-500', 'bg-green-500',
    'bg-yellow-400', 'bg-purple-500', 'bg-pink-400',
    'bg-indigo-500', 'bg-teal-400', 'bg-orange-400'
  ];
  const index = name.length % colors.length;
  return colors[index];
};
