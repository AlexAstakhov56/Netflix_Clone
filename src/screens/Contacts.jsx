import Banner from "../components/Banner";

const Contacts = () => {
  const styles = "my-2 text-xl";
  return (
    <div className="min-h-screen container py-6">
      <Banner text="My Contacts" />
      <div className="py-10 xl:py-20 px-4">
        <div className="flex flex-col items-center justify-center">
          <div className={styles}>
            <span className="text-secondary">- Phone Number: </span>
            +7-920-123-45-67
          </div>
          <div className={styles}>
            <span className="text-secondary">- Mail: </span>
            aleks.astakhov.2025@mail.ru
          </div>
          <div className={styles}>
            <span className="text-secondary">- VK: </span>
            https://vk.com/alexeyastakhov
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
