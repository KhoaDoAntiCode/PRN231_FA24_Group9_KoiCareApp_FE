const ApplicationStatus = ({ status }: { status: string }) => {
    return (
      <div className="border p-4 rounded-lg bg-gray-50">
        <h3 className="font-bold text-xl mb-2">Application Status</h3>
        <p className={`text-${status === 'Approved' ? 'green' : 'red'}-500`}>
          {status === 'Approved' ? 'Your application has been approved!' : 'Your application is still under review.'}
        </p>
      </div>
    );
  };
  
  export default ApplicationStatus;