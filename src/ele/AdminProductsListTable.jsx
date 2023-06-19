import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AdminProductsListTable = ({ products }) => {
  const [confirmDelete, setConfirmDelete] = useState(true)

  return (
    <main className="w-full">
      <div className="flex justify-between bg-gray-200 items-center p-4">
        <div className="text-xl font-bold">Products #{products.length}</div>
        <Link to="add-product" >
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
              <td className="py-2 flex justify-around gap-2">
                <div className="edit">
                  <FontAwesomeIcon icon={faPen} />
                </div>
                <div className="trash" >
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default AdminProductsListTable;
