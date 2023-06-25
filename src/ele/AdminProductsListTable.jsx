import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import DeletePopUp from './DeletePopUp';

const AdminProductsListTable = ({ products, setProducts  }) => {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  const navigate = useNavigate();

  const handleDelete = (productId) => {
    setProductIdToDelete(productId);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    // Perform the actual delete operation
    fetch(`https://api.storerestapi.com/products/${productIdToDelete}`,
      {
          method: 'DELETE',
      })
      .then(response => response.json())
      .then(json => {
        // Remove the deleted product from the products array
        const updatedProducts = products.filter(
          (product) => product._id !== productIdToDelete
        );
        setProducts(updatedProducts);
        console.log(json);
      })

    // Once the delete is complete, you can hide the confirmation dialog
    setConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const handleEdit = (productId) => {
    // Navigate to the edit form page with the product ID as a parameter
    navigate(`/admin/edit-product/${productId}`);
  };
  

  return (
    <main className="w-full">
      {confirmDelete && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
        <DeletePopUp
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      </div>
      )}

      <div className="flex justify-between bg-gray-200 items-center p-4">
        <div className="text-xl font-bold">Products #{products.length}</div>
        <Link to="../add-product" >
          <div className="flex items-center gap-2 bg-white p-2 rounded-md">
            <FontAwesomeIcon icon={faPlus} />
            <div className="">Add Products</div>
          </div>
        </Link>
      </div>

      <table className="w-full  mx-auto mt-8">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Price</th>
            <th className="py-2">Category</th>
            <th className="py-2">Owner</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td className="py-2">{product.title}</td>
              <td className="py-2">{product.price}</td>
              <td className="py-2">{product.category.name}</td>
              <td className="py-2">{product.createdBy.name}</td>
              <td className="py-2 flex items-center justify-around gap-2">

                <button onClick={() => handleEdit(product._id)} className="edit">
                  <FontAwesomeIcon icon={faPen} />
                </button>

                <button onClick={() => handleDelete(product._id)}  
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminProductsListTable;
