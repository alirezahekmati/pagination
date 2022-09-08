/**
 * it will create new array with pagination from your array
 *
 * @function usePagination
 * @param {Array} jsxArray  jsxArray - and array of maped jsx elements
 * @param {Number} currentPage currentPage - the current page you are in
 * @param {Number} pageSize pageSize - size of each page
 * @return {Array} array - contains [filteredElemants,totalPage]
 *
 *
 */

export default function usePagination(jsxArray, currentPage, pageSize) {
  const totalElements = jsxArray.length;
  const totalPage = Math.floor(totalElements / pageSize + 1);
  const remainingPage = totalElements % pageSize;
  const elemets = jsxArray.reverse();
  const firstElement = currentPage * pageSize - pageSize;
  const lastElement = currentPage * pageSize - 1;

  const filteredElemants = elemets.filter(
    (e, index) => index >= firstElement && index <= lastElement
  );

  return [filteredElemants, totalPage];
}
