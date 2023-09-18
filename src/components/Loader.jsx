/* eslint-disable react/prop-types */
export default function ContactLoader({ message }) {
  return <div className="no-item">{message}</div>;
}

export const ContactTableLoader = ({ message }) => {
  return (
    <tr>
      <td colSpan={4} className="no-item">
        {message}
      </td>
    </tr>
  );
};
