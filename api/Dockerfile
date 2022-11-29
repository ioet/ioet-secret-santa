FROM public.ecr.aws/lambda/python:3.9

ADD ioet-secret-santa ${LAMBDA_TASK_ROOT}/ioet-secret-santa
ADD commons ${LAMBDA_TASK_ROOT}/commons

COPY requirements.txt  .

RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"

CMD [ "ioet-secret-santa.main.handler" ]