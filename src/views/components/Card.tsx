type CardProps = {
    title: string;
    children: React.ReactNode;
  };

const Card = ({ title, children }: CardProps) => {
    return (
        <>
        <div className="page-content page-container" id="page-content">
          <div className="padding">
            <div className="row container d-flex justify-content-center">
              <div className="col-md-12">
                <div className="card px-3">
                  <div className="card-body">
                    <h4 className="card-title">{ title}</h4>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Card;